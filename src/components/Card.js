export default function Card({title}) {
    return(
    <div className ="card mb-2">
        <div className ="card-body">
            {title}
        </div>
    </div>
    );
}