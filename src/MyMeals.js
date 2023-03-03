import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div>
            <p>{text}</p>
            <div className="center-icon">
                <AiFillEdit width="50px" onClick={updatingInInput}></AiFillEdit>
                <AiFillDelete width="50px" onClick={deleteMeal}></AiFillDelete>
            </div>
        </div>
    )
}
