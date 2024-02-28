const comments = [
    {
        id: 1,
        text: "This is the first comment",
        parentId: null,
        replies: [
            {
                id: 2,
                text: "This is a reply to the first comment",
                parentId: 1,
                replies: [
                    {
                        id: 3,
                        text: "This is a nested reply",
                        parentId: 2,
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "This is an independent comment",
        parentId: null,
        replies: []
    }
];
function generateComment(comment, level) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.style.marginLeft = level * 30 + 'px'; 
    const commentText = document.createElement('p');
    commentText.textContent = comment.text;
    commentDiv.appendChild(commentText);
    if (comment.replies.length > 0) {
      comment.replies.forEach(reply => {
        const replyDiv = generateComment(reply, level + 1);
        commentDiv.appendChild(replyDiv);
      });
    }
    return commentDiv;
  }
  function displayComments(commentsArray, container, level) {
    commentsArray.forEach(comment => {
      const commentDiv = generateComment(comment, level);
      container.appendChild(commentDiv);
    });
  }
  document.addEventListener('DOMContentLoaded', function() {
    const commentsContainer = document.getElementById('commentsContainer');
    displayComments(comments, commentsContainer, 0);
  });
