if(query.includeComments || query.includeAll){
    dpd.comments.get({postId: this.id}).then(function(comments){
        this.comments = comments;
    })
}

if(query.includeAllowedComments){
    dpd.comments.get({postId: this.id, allow: true}).then(function(comments){
        this.comments = comments;
    })
}

if(query.includeAuthor || query.includeAll){
    dpd.users.get({id: this.creator}, function(data){
        this.user = data;
    });
}