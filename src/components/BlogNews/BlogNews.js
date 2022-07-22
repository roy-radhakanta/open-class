import React from 'react';
import news from "../../news";
import NewsBlock from './NewsBlock/NewsBlock';


function BlogNews(){

    const allNews = news.map(
        (curNews) => {
            return (
                <NewsBlock key={curNews.id} title={curNews.title} description={curNews.description}/>
            );
        }
    );

    return (
        <div className="oc-as">
            <div className="oc-as__container sg-big">
                <div className="container">
                    <h2 className="body-heading">News/Blog</h2>
                    <div className="oc-blog">
                        <div className="oc-blog-row flex a-i-c">
                            {allNews}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogNews;