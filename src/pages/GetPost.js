import { connect } from 'react-redux'
import { deleteAction, updateAction } from '../Actions/postAction'
import { Wrapper, Container, H2, Pwrap, Update, Textarea, Button } from '../Styles/mainStyles'

function GetUser(props) {

    //invoke delete methode
    const handleDelete = () => {
        if (props.post) {
            props.delete(props.post.id)
            props.history.push('/')
        }
    }

    const handleUpdate = () => {
        if (document.querySelector('#update').style.display === 'block') 
            document.querySelector('#update').style.display = 'none'
        else
            document.querySelector('#update').style.display = 'block'

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.update(props.post.id, document.querySelector('#text').value)
        props.history.push('/')
    }

    return <Wrapper>
        <Container>
            { //if is important
                props.post ? <>
                    <H2>Post Title</H2>
                    <Pwrap>{props.post.content}</Pwrap>
                    <Button onClick={handleDelete}>Delete</Button>
                    <Button onClick={handleUpdate}>Update</Button>

                    <Update id="update">
                        <form onSubmit={e => handleSubmit(e)}>
                            <Textarea name="" id="text" cols="50" rows="10" defaultValue={props.post.content} />
                            <input type="submit" value="Done" />
                        </form>
                    </Update>
                </>
                    : <Pwrap>Loading...</Pwrap>
            }
        </Container>
    </Wrapper>


}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.user
    return {
        post: state.posts.find(item => item.id === parseInt(id))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //delete methode will dispatch this action
        //send action to the reducer
        delete: (id) => {
            // dispatch({ type: "DELETE", id: id })
            dispatch(deleteAction(id))
        },
        update: (id, newContent) => dispatch(updateAction(id, newContent)),
    }
}
//store.dispatch({type:})
export default connect(mapStateToProps, mapDispatchToProps)(GetUser)
