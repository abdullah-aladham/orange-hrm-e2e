import { should } from "chai";

class buzzPage{

    elements={
        buzzTextArea:()=>cy.get('textarea[placeholder="What\'s on your mind?"]'),
        submitPost:()=>cy.contains("Post").first(),
        SuccessNotificationToast:()=>cy.get('.oxd-toast oxd-toast--success oxd-toast-container--toast'),
        likeBtn:()=>cy.get('.orangehrm-heart-icon'),
        likedbtn:()=>cy.get('div[class="orangehrm-like-animation"]'),
        commentBtn:()=>cy.get('i[class="oxd-icon bi-chat-text-fill"]'),
        commentInputfield:()=>cy.get('.oxd-input'),
        shareBtn:()=>cy.get('i[class="oxd-icon bi-share-fill"]'),
        sharePhotos:()=>cy.get('button').contains('Share Photos'),
        shareVideos:()=>cy.get('button').contains('Share Video'),
        moreSettings:()=>cy.get(".orangehrm-buzz-post-header-config").first(),
        deletePostOption:()=>cy.get('.orangehrm-buzz-post-header-config-item').first(),
        editPostOption:()=>cy.get('.orangehrm-buzz-post-header-config-item').last(),
        editPostInputField: ()=>cy.get('.oxd-buzz-post-input').last(),
        saveChangesBtn:()=>cy.get('.oxd-form-actions > .oxd-button'),
        posts:()=>cy.get('.orangehrm-buzz'),
        likeCounter:()=>cy.get('.oxd-text .oxd-text--p'),

    }
     likePost(postId:string){
        cy.get('.orangehrm-buzz').filter(`:contains("${postId}")`).as('focusedPost');
        cy.get('@focusedPost').find('.orangehrm-heart-icon').first().click();
        this.elements.likeCounter().should('not.equal',"0 likes")
        
        // cy.get('.orangehrm-buzz').filter('.orangehrm-heart-icon').click();
        // this.elements.likedbtn().should('be.visible');
    }
    createApost(content:string){
        // cy.get('.oxd-buzz-post-input').click();
        this.elements.buzzTextArea().type(content);
        this.elements.submitPost().click();
        this.elements.SuccessNotificationToast().should('be.visible');
        cy.intercept('/web/index.php/api/v2/buzz/posts')
        .as("PostedSuccessfuly");
        cy.wait('@PostedSuccessfuly').then((interception)=>{
            const postid=interception.request.body.postid;
        });
    }
    commentOnPost(postText:string,comment:string){
   
 cy.get('.orangehrm-buzz').filter(`:contains("${postText}")`).as('focusedPost');
 cy.get('@focusedPost').find('.bi-chat-text-fill').first().click();
    //  this.elements.commentBtn().click();
    this.elements.commentInputfield().last().type(comment+"{enter}").type();
       this.elements.SuccessNotificationToast().should('be.visible');


    }
   editPost(postText:string,newText:string){
    cy.get('.orangehrm-buzz').filter(`:contains("${postText}")`).as('focusedPost');
    this.elements.moreSettings().click();
    this.elements.editPostOption().click();
    this.elements.editPostInputField().clear().type(newText);
    this.elements.saveChangesBtn().click();
    this.elements.SuccessNotificationToast().should('be.visible');
    cy.get("@focusedPost").should('eq',newText)

   }
}
export default buzzPage;