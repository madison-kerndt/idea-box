function clearInputFields() {
  $('.title-input-field').val('');
  $('.body-input-field').val('');
}

// // Constructor: Allows to make n amount of instances (object)
function IdeaLocalStorage() {
  this.storeKey = 'ideas';
  this.ideas = [];
}
//
// // Singleton Object
// var IdeaLocalStorage = {
//   storeKey: 'ideas',
//   ideas: [],
//   removeIdea: function(id) {
//       // refactoring to a singleton
//   }
// };

IdeaLocalStorage.prototype.getIdeas = function() {
  return JSON.parse(window.localStorage.getItem(this.storeKey)) || [];
}

IdeaLocalStorage.prototype.addIdea = function(idea) {
  var ideas = this.getIdeas();
  ideas.unshift(idea);
  window.localStorage.setItem(this.storeKey, JSON.stringify(ideas));
}

IdeaLocalStorage.prototype.removeIdea = function(uniqueId) {
  var ideas = this.getIdeas();
  var newIdeas = [];
  newIdeas.forEach(function(idea) {
      if(!idea.uniqueId === uniqueId) newIdeas.push(idea);
  })
  window.localStorage.setItem(this.storeKey, JSON.stringify(newIdeas));
}

IdeaLocalStorage.prototype.updateIdea = function(idea) {
  var ideas = this.getIdeas();
  var newIdeas = [];
  ideas.forEach(function(existingIdea) {
      if(!existingIdea.uniqueId === idea.uniqueId) newIdeas.push(idea);
      else newIdeas.push(idea);
  });
  window.localStorage.setItem(this.storeKey, JSON.stringify(newIdeas));
}

IdeaLocalStorage.prototype.search = function(searchText) {
  var ideas = this.getIdeas();
  var results = [];
  ideas.forEach(function(idea) {
      if(idea.title.indexOf(searchText) >= 0) results.push(idea);
      else if (idea.body.indexOf(searchText) >= 0) results.push(idea);
  });
  return results;
}

var ideaStore = new IdeaLocalStorage();

function createIdea() {
  var ideaTitle = $('.title-input-field').val();
  var ideaBody = $('.body-input-field').val();
  var uniqueId = Date.now();
  // make an idea object using an Idea constructor
  var idea = { id: uniqueId, title: ideaTitle, body: ideaBody };
  ideaStore.addIdea(idea);

  render(ideaStore.getIdeas());
}

// DELETE BUTTON
// $('.idea-list-container').on('click', '.delete-button', function() {
//   var uniqueId = Date.now();
//   ideaStore.removeIdea(uniqueId);
//   render(ideaStore.getIdeas());
// })

function render(ideas) {
  $('.idea-list-container').empty();
  ideas.forEach(function(idea) {
    $('.idea-list-container').append(`
      <article id=${idea.id}>
<<<<<<< HEAD
      <input type="image" src="images/delete.svg.png" class="delete-button"/>
      <h2>${idea.title}</h2>
      <p>${idea.body}</p>
      <input type="image" src="images/upvote.svg.png" class="quality-button up"/>
      <input type="image" src="images/downvote.svg.png" class="quality-button down"/>
      </article>
    `);
=======
      <span class="top line">
      <h2>${idea.title}</h2>
      <button type="button" class="delete-button"/></button></span>
      <p>${idea.body}</p>
      <span class="bottom-line">
      <button type="button" class="quality-button up"/></button>
      <button type="button" class="quality-button down"/></button>
      <p class="quality">quality: </p>
      </span>
      </article>`);
>>>>>>> master
  });
}

$('.search-field').on('keyup', function() {
  var searchText = $(this).val();
  var searchResults = ideaStore.search(searchText);
  render(searchResults);
});

$('.save-button').on('click', function() {
  createIdea();
  clearInputFields();
});

render(ideaStore.getIdeas());

// DELETE BUTTON

// EDITABLE FIELD FOR TITLE & BOVY

// event handeler for each
// triggers change to body/ title
// saves and rerenders on event handeler (return or click out)


// QUALITY

// event handeler to trigger event
// counter function up
// counter function down
// matching function with array



// $('.idea-list-container').on('click', '#delete-article-button', function() {
//   deleteIdea();
// });

// create objects around behaviour

//run all logic and seperately from DOM and destroy and recreate DOM with every interaction

// to clear everything (all stored data) set Store to empty string



//
// function deleteIdea() {
//   $('#delete-article-button').closest('article').remove();
// }
//
// function createIdea() {
//   var $uniqueId = Date.now();
//   var $ideaBody = $('.body-input-field').val();
//   var $ideaTitle = $('.title-input-field').val();
//   // var idea = new Idea($uniqueId, $ideaTitle, $ideaBody);
//   $(`
//     <article id=${$uniqueId} class="idea-article">
//     <h2>${$ideaTitle}</h2>
//     <button id="delete-article-button">DELETE</button>
//     <p>${$ideaBody}</p>
//     <button id="increase-quality-button">Thumbs Up</button>
//     <button id="decrease-quality-button">Thumbs Down</button>
//     </article>
//     `).prependTo('.idea-list-container');
// }
//
// function Idea(id, title, body) {
//   this.id = id;
//   this.title = title;
//   this.body = body;
// }
