import { PropTypes } from 'prop-types';


export default function Card({title, children, onClick}) {
    return(
    <div className ="card mb-2 cursor-pointer" onClick={onClick}>
         <div class="card-header">
            오늘의 일기
        </div>
            <div className='card-body'> 
            <div className="d-flex justify-content-between">
                <div>{title}</div>
                {children && <div>{children}</div>}
            </div>
            </div>  
    </div>

    );
}

Card.propTypes = {
    title : PropTypes.string.isRequired,
    onClick : PropTypes.func
}

Card.defaultProps = {
    onClick : () => {}
}