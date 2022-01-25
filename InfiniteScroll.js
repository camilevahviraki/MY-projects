import React,{useState,useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

function InfinteScroller() {
  
    const [items,setItems] = useState([]); // items a afficher en scroll
    const [noMore,setnoMore] = useState(true); // fin de page ou non
    const [page,setPage] = useState(2); // Variable page qui va s'incrementer
    useEffect(()=> {
        const getComments = async () => {
           const res = await fetch(
               //axios... fetch bdd ...page1
           );
           const data = await res.json();
        };
        getComments();
    },[]);
    const fetchComments = async () => {
        const res = await fetch(
            //axios... fetch bdd ...page{*page* <= num page qui va incrementer}
        );
        const data = await res.json();
    
 };

    const fetchData = async () => {
        const commentsFormServer =await fetchComments();
        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length ===0 || commentsFormServer.length < 20){
            setnoMore(false);
        }
        setPage(page+1);
     };
return (
    <InfiniteScroll
    dataLength ={items.Length}
    next={fetchData}
    hasMore={noMore}
    loader={<h4>loading...</h4>}
    endMessage={
        <p> Yay! you have seen it all</p>
    }
    >
    {items.map((item) => {
        return <div key={item.id}>
                   <div>id: {item.id}</div>
                   <div>email: {item.email}</div>
                   <div>body: {item.body}</div>
                   </div>
    })}
     </InfiniteScroll>   
);
}
export default InfiniteScroller;