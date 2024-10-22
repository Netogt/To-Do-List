import List from "./List"

export default function BodyList(){
   
    return(
        <main className="bodyList"> 
            <List typeList="unChecked"></List>
            <hr />
            <List typeList="checked"></List>
        </main>
    )
}