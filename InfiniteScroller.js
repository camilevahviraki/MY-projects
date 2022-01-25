import React,{useState,useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Axios from "axios";
function InfinteScroller() {
  
    const [items,setItems] = useState([]); // items a afficher en scroll
    const [noMore,setnoMore] = useState(true); // fin de page ou non
    const [page,setPage] = useState(1); // Variable page qui va s'incrementer
    
    //Au debut...
    useEffect(()=> {
        //axios... fetch bdd ...page1  
        const getComents =async () => {
         const {res}= await Axios.get(`http://localhost:3001/scrollAgain?page=0`);//.then((response) => { }) 
                 const dataR = res;
                 //setItems(dataR);
                 console.log(res);
                };
            getComents()    
            },[]);
            

    const fetchComments = async () => {
            //axios... fetch bdd ...page{*page* <= num page qui va incrementer}
            await  Axios.get(`http://localhost:3001/scrollAgain?page=${page}`).then((response) => {
                const dataR = response.data.result;    
                return dataR;
                 })   
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
    { items.map((item) => {
        return (
        <div key={item.id}>
                   <div>id: {item.id}</div>
                   <div>nom: {item.nom}</div>
                   <div>post_nom: {item.post_nom}</div>
                   <div>password: {item.password}</div>
                   <div>pays: {item.pays}</div>
                   <div>phone: {item.phone_number}</div>
                   </div>
        )
    })}
     </InfiniteScroll>   
);
}
export default InfinteScroller;