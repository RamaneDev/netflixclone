import React, {Component} from "react";
import { HeaderImg, LoadButton, Searchbar } from "../components";
import { PosterList } from "../components/PosterList";

  

class Home extends Component {
    render() {
        const {mTitle, mDesc, image, movies, loading } = this.props;
        return (
          <div>
                <HeaderImg 
                    title={mTitle}
                    overview={mDesc}
                    imgSrc={image}

                />
                <Searchbar />
                <PosterList movies={movies}/>
                <LoadButton loading={loading}/>
           </div>
        )
    }
}

export { Home };