import { Link } from "react-router-dom"


export const Page404 = () => {

    return <div>
        <p>Запрашиваемая страница не найдена</p>
        <Link to='/'>Вернуться на главную</Link>
    </div>
}