import React from 'react';
import {Link} from 'react-router-dom';

// HomeCategory este componenta care afiseaza imaginea, titlul si descrierea unei categorii. (preview-ul acesteia)
// De asemenea, trebuie sa primeasca si ruta(numele categoriei) catre care va redirectiona atunci
// cand se da click pe ea.
function HomeCategory(props) {
    const {route, name, description, image} = props;

    return(
        // col-6 => div-ul cu aceasta clasa va ocupa 6 pozitii din 12(jumatate din spatiu) Din nou, vezi teorie Bootstrap!
        <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
            {/* Vrem ca atunci cand dam click pe componenta de categorie sa fim dusi in pagina respectivei categorii.
            Asadar, trebuie sa punem un link, care sa contina numele categoriei. */}
            <Link to={`/category/${route}`}>
                <div className="w-100">
                    <img src={image} alt={name} className="w-100"/>
                </div>
                <h2 className="h4 my-1"><strong>{name}:</strong></h2>                
            </Link>
            <p className="m-0">{description}</p>
        </div>
    );
}

export default HomeCategory;