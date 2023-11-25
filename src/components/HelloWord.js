
function Link (props){
    return (
        <div>
           <a href={props.href} className={props.className}>{props.name}</a>
        </div>
    )
}

export default Link;
