<style>
    @import url('https://fonts.cdnfonts.com/css/nats');
    #box {
        background-color: #FFE8E8;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding: 25px;
        border-radius: 20px;
        width: 15em;
    }
    .text {
        display:inline;
        font-family: 'NATS', sans-serif;
        font-size: 1em;
        /* height: 40px; */
    }
    .greytext {
        display:inline;
        color:#757575;
        font-family: 'NATS', sans-serif;
        font-size: 1em;
        height: 40px;
    }
    .header {
        font-weight: bold;
    }
    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: aquamarine; */
    }

    .flex2 {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .row {
        display: flex;
        justify-content: center;
    }

    .time {
        margin-left: auto;
        margin-right: 0;
    }

    #image {
        margin-right: 15px;
        margin-left: 0px;
        border-radius: 10px;
    }
</style>

<body>
    <div id="box">
        <div class="row">
            <img id="image" src={ src==""?("https://api.dicebear.com/5.x/pixel-art/svg?seed=" + name):src } alt="Test Person's face" height=75px, width=75px>
            <br/>
            <div class="flex2">
                <div class="text" style="margin-bottom: 10px; font-weight:bold">{name}</div>
                <div class="flex-container">
                    <div>
                        <div class="greytext header">Distance : </div> 
                        <div class="greytext">{distance}<br> mi</div>
                    </div>
                
                    <div class="time">
                        <div class="greytext header">Time : </div> 
                        <div class="greytext">{time}<br> mins</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<script>
    export let name = "Person Person";
    export let time = 15;
    export let distance = 0.5;
    export let src = "./images/slug.png";
</script>