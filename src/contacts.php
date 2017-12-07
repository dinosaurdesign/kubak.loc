<?php
include 'header.php'
?>
<section class="container contacts_page">
    <div class="row internalbanner">
        <div class="col">
            <img src="img/carousel/3.png" width="100%" alt="">
        </div>
    </div>
</section>
<section id="contacts" class="container contacts">
    <h2>Давайте работать вместе</h2>
    <div class="row">
        <div class="col col-12 col-md-6">
            <h3>Можете связаться с нами</h3>
            <p>Тел.:<a href="">номер телефона</a> - Александр</p>
            <br>
            <p>e-mail: <a href="mailto:info@dds.by">info@kubak.by</a></p>
            <br>
            <p>Следите за нами в социальных сетях:</p>
            <p><a href="https://www.instagram.com/kubakby/" target="_blank">Instagram</a>,
                <a href="https://vk.com/kubakby" target="_blank">Vkontakte</a>,
        </div>
        <div class="col col-12 col-md-6">
            <h3>или заполнить форму</h3>
            <form id="formMain" method="POST" name="application ">
                <input name="name" id="zayavkaName" type="text" maxlength="20" placeholder="имя" required/>
                <br>
                <input name="email" type="email" id="applicationEmail" maxlength="20" placeholder="e-mail"
                       required/>
                <br>
                <input name="telephone" type="Tel" id="applicationTelephone" maxlength="20"
                       placeholder="телефон" required/>
                <br>
                <textarea name="textarea" id="textarea" cols="15" rows="3"
                          placeholder="Описание вашего проекта"></textarea>
                <br>
                <input id="button" type="submit" value="Отправить"/>
            </form>
        </div>
    </div>
    <br>
    <br>
    <p>*Необязательно у нас что-то заказывать. Вы просто можете спросить совет и мы с радостью поможем.</p>
    <br>
</section>


<?php
include 'footer.php'
?>
