<template>
    <body>
        <div class="container">
            <div class="card">
                <div class="imgBox">
                    <img src="@/assets/png3.png" >
                </div>
                <div class="details">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quam excepturi sint quaerat consectetur praesentium, numquam autem quibusdam incidunt veritatis?</p>
                </div>
            </div>
            <div class="card">
                <div class="imgBox">
                    <img src="@/assets/png3.png" >
                </div>
                <div class="details">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quam excepturi sint quaerat consectetur praesentium, numquam autem quibusdam incidunt veritatis?</p>
                </div>
            </div>
            <div class="card">
                <div class="imgBox">
                    <img src="@/assets/png3.png" >
                </div>
                <div class="details">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quam excepturi sint quaerat consectetur praesentium, numquam autem quibusdam incidunt veritatis?</p>
                </div>
            </div>
            <div class="card">
                <div class="imgBox">
                    <img src="@/assets/png3.png" >
                </div>
                <div class="details">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quam excepturi sint quaerat consectetur praesentium, numquam autem quibusdam incidunt veritatis?</p>
                </div>
            </div>
            <div class="card">
                <div class="imgBox">
                    <img src="@/assets/png3.png" >
                </div>
                <div class="details">
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quam excepturi sint quaerat consectetur praesentium, numquam autem quibusdam incidunt veritatis?</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
    font-family: 'Quicksand', sans-serif;
}
.container{
    max-width: 1000px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.card {
    position: relative;
    margin: 20px 0;
    width: 300px;
    height: 400px;
    background: #fff;
    transform-style: preserve-3d;
    transform: perspective(2000px);
    transition: 1s;
    box-shadow: inset 300px 0 50px rgba(0,0,0,.5);
    }
    .card:hover{
        z-index: 1000;
        transform: perspective(2000px) rotate(-10deg);
        box-shadow: inset 20px 0 50px rgba(0,0,0,.5);
    }
    .card .imgBox{
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid #000;
        box-sizing: border-box;
        transform-origin: left;
        z-index: 1;
        transition: 1s;
    }
    .card:hover .imgBox{
        transform: rotateY(-135deg)
    }
    .card .imgBox img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    .card .details{
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 20px;
    }

</style>
