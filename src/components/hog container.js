
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