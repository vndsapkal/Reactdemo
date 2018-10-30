import React, {Component} from 'react';


class AddProject extends Component
{   
    constructor()
    {
        super();
        this.state = {
            newProject: {}
        }
    }

    // static defaultProp = {
    //     titles: ['Business Development', 'Social App','Ecommerce Shopping']
    // }
    static defaultProps = {
        categories: ['Web Design', 'Web Development','Mobile Development']
    }

        handelSubmit(e){
            if(this.refs.title.value === '')
            {
                    alert('Title is required');
            }
            else
            {
                this.setState({newProject:{
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }});
            }
            e.preventDefault();
        }

    render() {  
        // let titleOptions = this.props.titles.map(title => {
        //     return <option key={title} value="Title">{title}</option>
        // });
            let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value="Category">{category}</option>
        });
        
        return (
            <div>
                 <h3>Add Project</h3>
                 
                 <form onSubmit={this.handleSubmit.bind(this)}>
                     <div>
                         <label>Title</label> &nbsp;
                         <input type='text' ref='Title' />
                         {/* <select ref="title">
                         {titleOptions}
                         </select> */}
                     </div>
                     <div>
                         <label>Category</label> &nbsp;
                         <select ref="category">
                         {categoryOptions}
                         </select>

                     </div>
                     <input type='submit' value='Submit'/>
                 </form>
            </div>
        ); 
    }
}


export default AddProject;