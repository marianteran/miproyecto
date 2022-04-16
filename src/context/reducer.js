export const initialState = { // crear estados
    apps: [], //estado inicial de products
    smedia:[],
    equipments:[],
    equipmentsNew: [],
    user: null,   
}

export const accionType = { // mis accioness
    APPSDB: "APPSDB",
    SMEDIADB: "SMEDIADB",
    EQUIPMENTSDB: "EQUIPMENTSDB",
    USERDB: "USERDB",
    FILTER: "FILTER"
}

const reducer = (state, action) => {
    //console.log(action); 
    switch (action.type) {
        case "APPSDB":
            return {
                ...state,
                apps: action.apps,       
            }
            case "SMEDIADB":
                return {
                    ...state,
                    smedia: action.smedia,         
                }
                case "EQUIPMENTSDB":
                return {
                    ...state,
                    equipments: action.equipments,         
                }
            case "USERDB":
                return {
                    ...state,
                    user: action.user
                }
                case "FILTER":
                    return {
                        ...state,
                        equipmentsNew: action.equipmentsNew
                    }
                                    
        default: return state
    }
}

export default reducer;