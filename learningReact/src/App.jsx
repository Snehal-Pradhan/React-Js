import UserProfile from "./components/UserProfile"
import { UserFavoriteFoods } from "./components/UserFavoriteFoods"

export default function App(){
    return <div>
        <h1>Root Component</h1>
        <UserProfile/>
        <UserFavoriteFoods/>
        </div>
}