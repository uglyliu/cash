import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Avatar, Col, Icon, Input, Row } from 'antd';
import Link from 'umi/link';
import style from './index.less';
import AvatarImg from '../assets/avatar.png';
import { MediaPath } from '@/config';
import { formatDate } from '@/utils/utils';

const Search = Input.Search;

const IconText = ({ type, text, theme }) => (
  <span>
    <Icon type={type} theme={theme} style={{ marginRight: 8 }}/>
    {text}
  </span>
);


@connect(({ user, index }) => ({ user, index }))
class IndexPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'index/getLinks' });
    dispatch({ type: 'index/getTags' });
    dispatch({ type: 'index/getHotArticles' });
    dispatch({ type: 'index/getSeriesArticles' });
    dispatch({ type: 'index/getArticles' });
  }

  render() {
    const { userDetail } = this.props.user;
    const { links, tags, hotArticles, seriesArticles, articles } = this.props.index;
    return (
      <Row gutter={8}>
        <Col span={17}>
          <div className={style.left}>
            <div className={style.hotArticleList}>
              <h2>热门排行</h2>
              <ul>
                {
                  hotArticles.map((article, index) =>
                    <li key={article.url}>
                      <div>
                        <span>
                          <Icon type="eye" theme="filled" style={{ marginRight: 8 }}/>查看（{article.view_count}）
                        </span>
                        <span className={style.dot}/>
                        <span className={style.hotArticleListComment}>
                          <Icon type="message" theme="filled" style={{ marginRight: 8 }}/>评论（{article.comment_count}）
                        </span>
                      </div>
                      <span className={style[`label${index + 1}`]}>{index + 1}</span>
                      <Link to={`/article/${article.url}`}>{article.title}</Link>
                    </li>,
                  )
                }
              </ul>
            </div>

            {
              articles.data.map((article) =>
                <div className={style.articleList} key={article.url}>
                  <Row>
                    {
                      (article.img === null) || !article.img ? <Fragment/> :
                        <Col span={6}>
                          <img className={style.articleImg}
                               src={`/media/${article.img}`} alt=""/>
                        </Col>
                    }
                    <Col span={article.img ? 18 : 24}>
                      <div className={style.articleContent}>
                        <h2 className={style.articleTitle}>
                          <Link to={`/article/${article.url}`}>{article.title}</Link>
                        </h2>
                        <div className={style.articleDesc}>
                          {article.description}
                        </div>
                        <div className={style.articleFooter}>
                          <span>{formatDate(article['release_time'])}</span>
                          <span className={style.dot}/>
                          <IconText type="eye" theme="filled" text={article['view_count']}/>
                          <span className={style.dot}/>
                          <IconText type="message" theme="filled" text={article['comment_count']}/>
                          {
                            article.tags ?
                              <Fragment>
                                <span className={style.dot}/>
                                {article.tags.map((tag) =>
                                  <Link
                                    className={style.tagLink}
                                    key={tag}
                                    to={`/tag/${tag}`}>
                                    {tag}
                                  </Link>,
                                )}
                              </Fragment>
                              :
                              <Fragment/>
                          }
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>,
              )
            }
          </div>
        </Col>
        <Col span={7}>
          <div className={style.right}>
            <div>
              <div className={style.meAvatar}>
                {
                  userDetail && !(userDetail['is_superuser'])
                    ?
                    <Avatar size={180} src={MediaPath + userDetail.avatar}/>
                    :
                    <Avatar size={180} src={AvatarImg}/>
                }
              </div>
              <p className={style.meLink}>
                {
                  userDetail && !(userDetail['is_superuser'])
                    ?
                    <Fragment>
                      Hello, {userDetail['nick_name']}
                    </Fragment>
                    :
                    <Fragment>
                      Find me on <Link to="/">
                      <Icon type="github" theme="filled"/>
                    </Link> and <Link to="/">
                      <Icon type="mail" theme="filled"/>
                    </Link> .
                    </Fragment>
                }
              </p>
              <div className={style.meSearch}>
                <Search
                  placeholder="搜索"
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </div>
            </div>

            <div>
              <div className={style.rightTitle}>
                <h2>系列文章</h2>
              </div>
              <div className={style.rightContent}>
                <ul>
                  {
                    seriesArticles.map((article) =>
                      <li key={article.url}><Link to={`/article/${article.url}`}>{article.title}</Link></li>,
                    )
                  }
                </ul>
              </div>
            </div>

            <div>
              <div className={style.rightTitle}>
                <h2>友情链接</h2>
              </div>
              <div className={style.rightContent}>
                <ul>
                  {
                    links.map((link) =>
                      <li key={link.name}>
                        <a href={link.url} target="view_window">{link.name}</a>
                      </li>,
                    )
                  }
                </ul>
              </div>
            </div>

            <div>
              <div className={style.rightTitle}>
                <h2>标签</h2>
              </div>
              <div className={style.rightContent}>
                <ul>
                  {
                    tags.map((tag) =>
                      <li key={tag.name}>
                        <Link to={`/tag/${tag.name}`}>
                          {tag.name}（{tag['article_count']}）
                        </Link>
                      </li>,
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default IndexPage;
