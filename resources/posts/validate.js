if(!me.admin && !me.posts){
    cancel("You are not authorized to do that", 401);
}