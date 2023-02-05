<style>
    @import url('https://fonts.cdnfonts.com/css/nats');
    #box {
        background-color: #FFE8E8;
        padding: 15px;
        border-radius: 10px;
        width:100%
        /* height: 100px; */
    }
    #text {
        font-family: 'NATS', sans-serif;
        font-size: 20px;
        height: 20px;
        justify-content: flex-start;
    }
    #textName {
        display:flex;
        font-family: 'NATS', sans-serif;
        font-size: 20px;
        height: 20px;
        justify-content: flex-start;
    }
    #greytext {
        display:inline;
        color:#757575;
        font-family: 'NATS', sans-serif;
        font-size: 20px;
        height: 20px;
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
        height:50px;
        justify-content: space-between;
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
    <button id="box">
        <span class="flex3">
            <img id="image" src={"https://api.dicebear.com/5.x/pixel-art/svg?seed=" + name} alt="Test Person's face" height=40px, width=40px>
            <br/>
            <span class="flex2">
                <span id="textName">{name}</span>
                <span class="flex-container">
                    <span>
                        <span id="text">Distance : </span> 
                        <span id="greytext">{distance}</span>
                    </span>
                
                    <span class="time">
                        <span id="text">Time : </span> 
                        <span id="greytext">{time} mins</span>
                    </span>
                </span>
            </span>
        </span>
    </button>
</body>

<script>
    export let name = "Person Person";
    export let time = 15;
    export let distance = 0.5;
</script>