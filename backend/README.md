estou a usar o module e com isso uso o import, vou usar SQLite para ser mais rapido e nao ter que instalar nada e consigo usar os comandos sql, 
adicionei as duas primeiras rotas /get all articles e create article e fiz o primeiro teste 
 Invoke-RestMethod -Method Post -Uri "http://localhost:3000/create-article" -ContentType "application/json" -Body '{
>>     "title": "Primeiro Teste",
>>     "content": "Isto é um teste de inserção.",
>>     "topic": "Tech",
>>     "author": "Edgar"
>> }'


id      : 1
title   : Primeiro Teste
content : Isto � um teste de inser��o.
topic   : Tech
author  : Edgar
date    : 2025-12-06T15:00:26.239Z


e depois o get dos artigos todos 
PS C:\Users\edgar\Documents\GitHub\Assimetria> Invoke-RestMethod -Method Get -Uri "http://localhost:3000/get-articles"                                            
                                 
                                                   
id      : 1              
title   : Primeiro Teste
content : Isto � um teste de inser��o.
topic   : Tech
author  : Edgar
date    : 2025-12-06T15:00:26.239Z

id      : 2
title   : Segundo  Teste
content : Isto � um teste de inser��o 2.
topic   : Tech_2
author  : Edgar
date    : 2025-12-06T15:01:14.927Z


