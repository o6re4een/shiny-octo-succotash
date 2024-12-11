<template>
    <nav class="navbar-container">
        <div class="navbar">
            <div>
                <img src="../assets/LogoHome.svg" alt="">
            </div>
            <div class="navbar__links">
                <p class="">Репродукции</p>
                <p class="">Новинки</p>
                <p class="">О нас</p>
                <div>
                    <img src="../assets/CartIcon.svg" alt="">
                </div>

            </div>
        </div>



    </nav>
</template>

<script setup>

</script>

<style scoped>
.navbar {
    display: flex;
    max-width: 1280px;
    width: 100%;
    justify-content: space-between;


    padding: 0 20px;
}

.navbar-container {
    display: flex;
    align-items: center;
    position: static;
    justify-content: center;
    top: 0;
    height: 100px;
    background-color: #E1EDE6;
}

.navbar__links {
    display: flex;
    gap: 20px;
    align-items: center;

}
</style>