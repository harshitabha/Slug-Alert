<style>
    @import url('https://fonts.cdnfonts.com/css/nats');
    #box {
        background-color: #FFE8E8;
        padding: 25px;
        border-radius: 20px;
        /* height: 100px; */
    }
    #text {
        display:inline;
        font-family: 'NATS', sans-serif;
        font-size: 30px;
        height: 40px;
    }
    #greytext {
        display:inline;
        color:#757575;
        font-family: 'NATS', sans-serif;
        font-size: 30px;
        height: 40px;
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

    .flex3 {
        display: flex;
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
        <div class="flex3">
            <img id="image" src={ src==""?"./images/defaultPfp.png":src } alt="Test Person's face" height=75px, width=75px>
            <br/>
            <div class="flex2">
                <div id="text">{name}</div>
                <div class="flex-container">
                    <div>
                        <div id="text">Distance : </div> 
                        <div id="greytext">{distance}</div>
                    </div>
                
                    <div class="time">
                        <div id="text">Time : </div> 
                        <div id="greytext">{time} mins</div>
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