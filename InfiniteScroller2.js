import React,{Component } from "react" ;
import axios from "axios";
import "./InfiniteScroller2.css"
import Loading from "./Loading";

class Articles extends Component {
    constructor(props) {
      super(props);

      this.state = {
          articles: [],
          page: -1,
          loading: true,
          hasEnded: false,
      };
      this.container = React.createRef();
    }

    componentDidMount () { // when we start the page
        this.setState({ page: this.state.page+1},()=> {
        
            this.fetch();
    
        });
        
        document.addEventListener("scroll",this.trackScrolling);
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.articles.length !== this.state.articles.length){
            document.addEventListener("scroll",this.trackScrolling);
        }
    }
    componentWillUnmount(){
        document.removeEventListener("scroll",this.trackScrolling);
    }

    trackScrolling = ()=> { // look if we reach the bottom and fetch new data 
        if (this.container.current.getBoundingClientRect().bottom <= window.innerHeight){ //if we reached the bottom..
           
            this.setState({ page: this.state.page+1},()=>{
                this.fetch();
            });
              
            console.log(this.state.page)    
            document.removeEventListener("scroll",this.trackScrolling)
        }
    }

    async fetch() {
        this.setState({loading: true});
        const { data} = await axios.get(
            `http://localhost:3001/scrollAgain?page=${this.state.page}`
            );
        console.log(data);
        if (data.articlesData.length ===0) {
            this.setState({hasEnded: true});
        }else {
            this.setState({
                articles:[ ...this.state.articles,...data.articlesData],
            });
        }

        this.setState({loading: false});
    }

    renderArticles() {
        return this.state.articles.map((article) => {
            return (
                <div className="article">
                    <div className="key_id"> key={article.id}</div>
                   <div className="details">
                     <div>id= {article.id}</div>
                   <div>  nom= {article.nom}</div>
                   <div>  post_nom={article.post_nom}</div>
                   <div> password= {article.password}</div> 
                    <div> pays= {article.pays}</div>
                     <div>phone= {article.phone_number}</div>
                     </div>
                </div>
               

                
            );
        });
    }

    render () {
        if (!this.state.articles) return <div/>;

        return <div ref={this.container}>
                  {this.renderArticles()}
                  {this.state.loading && <Loading/>}
                  {this.state.hasEnded && <div>Oups...No more articles</div>}
                </div>;
    }

}

export default Articles;