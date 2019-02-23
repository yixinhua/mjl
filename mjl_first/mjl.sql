SET NAMES UTF8;
DROP DATABASE IF EXISTS mjl;
CREATE DATABASE mjl CHARSET=UTF8;
USE mjl;
CREATE TABLE mjl_user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(32),
   phone INT(11),
   upwd  VARCHAR(32),
);
CREATE TABLE mjl_product(
   pid   INT PRIMARY KEY AUTO_INCREMENT,
   src   VARCHAR(255),
   href  VARCHAR(255),
   title  VARCHAR(255),
   detail VARCHAR(255),
   price  DECIMAL(8,2)
);
INSERT INTO mjl_product VALUES
(null,"img/36_thumb_G_1489436034291.png","mjl_buycar.html","平衡水","二次清洁补水去黄气 调节PH值",680),
(null,"img/48_thumb_G_1489436360720.png","mjl_buycar.html","青春浓缩精华素","嫩肤保湿抗皱、收毛孔、皙白肌肤",1280),
(null,"img/65_thumb_G_1489436924904.png","mjl_buycar.html","麦吉丽贵妇膏","淡化痘印 改善色斑 收缩毛孔提亮肌肤..",1200),
(null,"img/66_thumb_G_1489436988749.png","mjl_buycar.html","素颜三部曲套盒","尽享素颜之美",3160),
(null,"img/82_thumb_G_1520302971991.png","mjl_buycar.html","胶原蛋白果味饮品","补充肌肤胶原蛋白 保湿亮采抗糖化",360),
(null,"img/87_thumb_G_1528797228643.png","mjl_buycar.html","雪颜晶透亮肤霜","温和补水 舒缓修护 均匀提亮肤色",520),
(null,"img/91_thumb_G_1530839971818.png","mjl_buycar.html","红石榴多莓果味饮品","光采红润 由内养外 喝出发光灯泡肌",360),
(null,"img/92_thumb_G_1539206982412.png","mjl_buycar.html","石墨烯晶采赋活眼膜","改善黑眼圈眼袋浮肿 紧致提拉淡化细纹",258);



