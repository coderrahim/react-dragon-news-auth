import { useEffect, useState } from "react";


const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('/public/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    
    return (
        <div>
            {news.length}
            {
                news.map(aNews =>
                    <div key={aNews.id} className="my-10 space-y-3">
                        <h2 className="text-xl font-medium">{aNews.title}</h2>
                        <img src={aNews.image_url} alt="" />
                        <p>
                            {aNews?.details.length > 200 ?
                                ''
                                :
                                '' 
                            }
                        </p>
                    </div>
                )
            }
        </div>
    );
};

export default News;