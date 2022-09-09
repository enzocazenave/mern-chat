import { useAuthStore } from "../hooks"

export const ConfigProfile = () => {

    const { user } = useAuthStore();

    return (
        <div className="ConfigProfile-container fadeIn">
            <img 
                className="ConfigProfile-container_img"
                src={ user.profile_img }
            />
            <h3 className="ConfigProfile-container_name">{ user.name } { user.surname }</h3>
            <cite className="ConfigProfile-container_username">{ user.username }</cite>
        </div>
    )
}
