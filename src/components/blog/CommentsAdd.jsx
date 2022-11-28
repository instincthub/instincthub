import {React} from "react";
import styled from "styled-components";
import TextField from "../forms/TextField";
import TextArea from "../forms/TextArea";
import SubmitBtn from "../forms/SubmitBtn";
import { reqOptions, fetchAPI, HOST_URL, printInputError } from "../../assets/js/help_func";

const CommentsAdd = (props) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Enable Spinning button
        e.target.querySelector('[type=submit]').classList.add('rolling');
        e.target.querySelector('[type=submit]').disabled = true;
    
        // Remove thumbnail from field if empty
        var formdata = new FormData(e.target);
    
        let requestOptions  = reqOptions('POST', formdata, true);
        fetchAPI(props.setNewComments, `${HOST_URL()}/api/v1/posts/comments/${props.data.slug}/`, requestOptions, true, props.setMessageType, props.setError)
      };

    // Disable spinning button after getting status from fetch
    if (props.newComments && document.querySelector('.rolling')) {
        document.querySelector('[type=submit]').classList.remove('rolling')
        document.querySelector('[type=submit]').disabled = false;
        document.querySelector('#addCommentsForm').reset();
        props.goToViolation();
    }

    return ( 
        <CommentTags onSubmit={handleFormSubmit} id="addCommentsForm">
            <h2 className="add_comments_header">Add Comments</h2>
            <TextField type="text" name="first_name" label="First Name" required={true}/>
            <TextField type="text" name="last_name" label="Last Name" required={true}/>
            <TextField type="email" name="email" label="Email" required={true}/>
            <TextArea name="content" rows="5" label="Say something:" required={true}/>
            <SubmitBtn add_class="important-btn" labels="Add Comment"/>
        </CommentTags>
     );
}
 
export default CommentsAdd;

const CommentTags = styled.form`
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 70px;

    h2.add_comments_header{
        font-size: 20px;
        margin-bottom: 10px;
    }
`;