import { useState } from "react";

import './SignUp.css';

import { CategoryAdmin, CategoryUser } from "../../constants/Category";

import FooterClient from "../../components/FooterClient";
import { Link } from "react-router-dom";
import { ROLES } from "../../constants/Roles";

const emptyCategory = {
    label: null,
    path: null,
    desc: null,
    func: {
        role: null,
        color: null
    },
    icon: null
};

const styleCategory = {
    border: "1px solid rgb(54 183 123)",
    color: "rgb(54 183 123)",
}

export default function SignUpSelectArea() {
    const [ category, setCategory ] = useState(emptyCategory);
    const [ checked, setChecked ] = useState(false);
    const [ selectedCategory, setSelectedCategory ] = useState(null);

    function handleCategory(category, index) {
        setCategory(category);
        setChecked(true);
        setSelectedCategory(index);
    }

    function getStyleByNumRole(roleIdentify) {
        const role = ROLES.find((query) => query.role === roleIdentify);

        return { background: `${role.color}`, border: `1px solid ${role.color}`, color: `#fff` };
    }

    return (
        <div>
            <div className="texts">
                <img src="/logo-white.svg" alt="logo-estacioneja" />

                <div className="texts-selected">
                    <h2> {category.desc ? `Eu gostaria de ${category.desc}...` :  `Eu gostaria de...`}</h2>
                </div>
            </div>


            <h4 className="text-center">Marque uma opção</h4>

            <div className="cards">

                <div className="card-normalUsers card-single">
                    {
                        CategoryUser.map((category, i) => 
                            <div key={i}  className="category" onClick={() => handleCategory(category, i)} style={selectedCategory === i ? styleCategory : null}>

                                    <category.icon className="icon"/>

                                <h2>{category.label}</h2>

                                <div className="tag-role" style={getStyleByNumRole(ROLES[0].role)}>
                                    {category.func}
                                </div>
                            </div>
                        )
                    }
                </div>
                
                <div className="diviser">
                    OU
                </div>

                <div className="card-especialUsers card-single">
                    {
                        CategoryAdmin.map((category, i) => 
                            <div key={i + CategoryUser.length}  className="category" onClick={() => handleCategory(category, i + CategoryUser.length)} style={selectedCategory === i + CategoryUser.length ? styleCategory : null}>

                                    <category.icon className="icon"/>

                                <h2>{category.label}</h2>

                                <div className="tag-role" style={getStyleByNumRole(ROLES[1].role)}>
                                    {category.func}
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            
            <div className="buttons-submit">
                <Link className={`btn btn-success ${!checked ? `disabled` : ``}`} to={`./${category.path}/passo-1`}>Proximo passo</Link>
            </div>

            <FooterClient/>
        </div>
    )
}