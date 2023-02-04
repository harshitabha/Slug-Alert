<script>
</script>

<main>
  <div class="flex-container">
    <h1>SlugAlert</h1>
    <img
      id="slugLogo"
      src= "./images/slug.png" alt="slug image"
    />  
  </div>
<div class="container">
  <div class="vertical-center">
    <button>
       <span class="transition"></span>
       <span class="gradient"></span>
       <span class="label">ALERT</span>
    </button>
  </div>
</div>


</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap');
	main {
		text-align: center;
		padding: 1em;
		width: 100%;
		margin: 0 auto;
		background-color:#F2FEFF;
		font-family: 'Rubik', sans-serif;
		color: #00575F;
	}
  .flex-container{
    display: flex;
    justify-content:center;
    align-items: center;
  }
  #slugLogo{
    width:40px;
    height:40px;
  }
  button {
	 border: 5px solid black;
	 font-family: 'Rubik', sans-serif;
   font-size: 37px;
   border-radius: 9999px;
   padding: 2.3em 1.2em;
   font-weight: 500;
   background: #FFE8E8;
   color: #00575F;
   position: absolute;
   overflow: hidden;
  }

  .gradient {
   position: absolute;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   border-radius: 0.6em;
   margin-top: -0.25em;
  }

  .label {
   position: relative;
   top: -1px;
  }

  .transition {   
	 transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
   transition-duration: 40000ms;
   background-color: #930000;
   border-radius: 9999px;
   width: 0;
   height: 0;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
  }

  button:active .transition{
   width: 14em;
   height: 14em;
 }
</style>