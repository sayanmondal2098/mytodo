import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
// import "react-table/react-table.css"
// import '../../assect/css/mycss.css'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts : []
        };

    }

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET",
        }).then(response => response.json())
          .then(posts => 
            this.setState({posts : posts,
            },console.log(posts))
        )
    }

    render(){
        const columns = [{  
            Header: 'userId',  
            accessor: 'userId'  
           },{  
           Header: 'id',  
           accessor: 'id'  
           },
           {  
           Header: 'title',  
           accessor: 'title'  
            },
            {  
           Header: 'body',  
           accessor: 'body'  
                }
        ]  
     
        return(
            <div className="container">
                <ReactTable
                columns={columns}
                data = {this.state.posts} >

                </ReactTable>
            </div>
        );
    }
}

export default Home ;