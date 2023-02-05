<script>
    export let name = 'bean';
</script>

<body>
    <div class="container">
        <div class="flex-container">
            <h1>Welcome {name}</h1>
            <img
                id="slugLogo"
                src= "./images/slug.png" alt="slug image"
            />  
        </div>
        <button>
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">ALERT</span>
        </button>
    </div>
</body>

<style>
    body {
        background-color:#F2FEFF;
    }
    .flex-container{
        color: #00575F;
        text-align: center;
        font-size: 20px;
        padding: 1em;
        /* margin-top: 30%; */
        display: flex;
        justify-content:center;
        align-items: center;
    }
    #slugLogo{
        width:40px;
        height:40px;
    }
    .container{
        margin-top: 40%;
        display: flex;
        justify-content:center;
        flex-direction: column;
    }
    button {
        box-shadow:  -16px 16px 32px #decaca,
        16px -16px 32px #ffffff;
        font-size: 40px;
        border-radius: 9999px;
        padding: 2.3em 1.2em;
        font-weight: 500;
        background: #FFE8E8;
        border: none;
        color: #00575F;
        position: absolute;
        margin-top: 15em;
        margin-left: 1.5em;
        overflow: hidden;
    }
    button:active span{
        color: #F2FEFF;
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
        z-index: 10;
        position: relative;
        top: -1px;
    }

    .transition {   
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        transition-duration: 15s;
        background-color: #ff6363;
        border-radius: 999px;
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