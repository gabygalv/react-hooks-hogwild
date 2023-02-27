//first load: show a card for each hog in ./porkers_data
//// displays name and image for each hog
//on click: display all details for each hog
import Hogtiles from './HogTiles';

export default function HogContainer ({ hogs }) {

    const hogTile = hogs.map( hogObj => {
        return <Hogtiles key={hogObj.name} hog={hogObj} />
})

return (
    <div className="ui grid container">
        { hogTile }
    </div>
)
}