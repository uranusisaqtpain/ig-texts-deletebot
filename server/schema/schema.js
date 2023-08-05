const graphql = require('graphql');
const {getEnterLeaveForKind} = require("graphql/language");
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:()=>({
    id:  {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
})
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args: {id: {type:GraphQLString}},
            resolve(parent, args){
                _find()
            }
        }
    }
});
book(id:"2"){
    name
    genre
}

module.exports = new GraphQLSchema({
    query: RootQuery
});
