import { useNavigate } from "react-router-dom"

export const Landing = () => {
const navigate =useNavigate();

    return(
        <div>
            <p>Landing Page page baru</p>
            <button className="border-2" onClick = {() => navigate('/myprofile')}>Go to my profile</button>
        </div>
    )
}