class buzzPage{

    elements={
        buzzTextArea:()=>cy.get('textarea[placeholder="What\'s on your mind?"]'),
        submitPost:()=>cy.get('button').contains('Post'),
        SuccessNotificationToast:()=>cy.get('.oxd-toast oxd-toast--success oxd-toast-container--toast'),
        likeBtn:()=>cy.get('.orangehrm-heart-icon'),
        likedbtn:()=>cy.get('div[class="orangehrm-like-animation"]'),
        commentBtn:()=>cy.get('i[class="oxd-icon bi-chat-text-fill"]'),
        commentInputfield:()=>cy.get('input[palceholder="Write your comment...'),
        shareBtn:()=>cy.get('i[class="oxd-icon bi-share-fill"]'),
        sharePhotos:()=>cy.get('button').contains('Share Photos'),
        shareVideos:()=>cy.get('button').contains('Share Video'),
        moreSettings:()=>cy.get('.oxd-icon bi-three-dots'),

    }
    createApost(content:string){
        this.elements.buzzTextArea().type(content);
        this.elements.submitPost().click();
        this.elements.SuccessNotificationToast().should('be.visible');

    }
    commentOnPost(comment:string){
       this.elements.commentBtn().click();
       this.elements.commentInputfield().type(comment);
       this.elements.SuccessNotificationToast().should('be.visible');


    }
    likePost(){
        this.elements.likeBtn().click();
        this.elements.likedbtn().should('be.visible');
    }
    
}
export default buzzPage;