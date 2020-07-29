
export default (state , action) => {
    switch(action.type) {
        case 'Del_transac':
            return {
                ...state,
                transaction : state.transaction.filter(transac => transac.id !== action.payload)
            }
        case 'add_transac':
            return {
                ...state,
                transaction : [action.payload , ...state.transaction]
                }
        default:
            return state;
    }
}