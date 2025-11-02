class buzzPage{

    elements={
        buzzTextArea:()=>cy.get('textarea[placeholder="What\'s on your mind?"]'),
        submitPost:()=>cy.contains("Post").first(),
        SuccessNotificationToast:()=>cy.get('.oxd-toast oxd-toast--success oxd-toast-container--toast'),
        likeBtn:()=>cy.get('.orangehrm-heart-icon'),
        likedbtn:()=>cy.get('div[class="orangehrm-like-animation"]'),
        commentBtn:()=>cy.get('i[class="oxd-icon bi-chat-text-fill"]'),
        commentInputfield:()=>cy.get('input[palceholder="Write your comment...'),
        shareBtn:()=>cy.get('i[class="oxd-icon bi-share-fill"]'),
        sharePhotos:()=>cy.get('button').contains('Share Photos'),
        shareVideos:()=>cy.get('button').contains('Share Video'),
        moreSettings:()=>cy.get('.oxd-icon bi-three-dots'),
        posts:()=>cy.get('.orangehrm-buzz')

    }
    createApost(content:string){
        // cy.get('.oxd-buzz-post-input').click();
        this.elements.buzzTextArea().type(content);
        this.elements.submitPost().click();
        // this.elements.SuccessNotificationToast().should('be.visible');
        // cy.intercept('/web/index.php/api/v2/buzz/posts')
        // .as("PostedSuccessfuly");
        // cy.wait('@PostedSuccessfuly').its('status').should('equal',200);

    }
    commentOnPost(comment:string){
       this.elements.commentBtn().click();
       this.elements.commentInputfield().type(comment);
       this.elements.SuccessNotificationToast().should('be.visible');


    }
    likePost(postData:string){
        cy.get('.orangehrm-buzz').filter(`:contains("${postData}")`).as('focusedPost');
        cy.get('@focusedPost').find('.orangehrm-heart-icon').click();
        
        // cy.get('.orangehrm-buzz').filter('.orangehrm-heart-icon').click();
        // this.elements.likedbtn().should('be.visible');
    }

}
export default buzzPage;