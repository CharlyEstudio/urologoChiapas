<?php

# =====================================
# =           CONTROLADORES           =
# =====================================
require_once "controladores/controlador.plantilla.php";
require_once "modelos/email.php";

# ===============================
# =           MODELOS           =
# ===============================
require_once "modelos/rutas.php";

# ===========================================
# =           EXTENSION PHPMAILER           =
# ===========================================
require_once "extensiones/PHPMailer/PHPMailerAutoload.php";


# ======================================================
# =           LLAMADO PRINCIPAL DE PLANTILLA           =
# ======================================================
$plantilla = new ControladorPlantilla();

$plantilla -> plantilla();