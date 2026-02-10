# Guide de dépannage - Formulaire et Discord

## Problème : Le lien Discord ne fonctionne pas

### Solutions :

1. **Vérifier que le serveur est redémarré**
   - Après avoir modifié `.env.local`, tu dois redémarrer le serveur :
   ```bash
   # Arrête le serveur (Ctrl+C)
   # Puis relance-le
   npm run dev
   ```

2. **Vérifier le lien dans `.env.local`**
   - Ouvre `.env.local`
   - Vérifie que `VITE_DISCORD_LINK` contient un lien Discord valide
   - Format attendu : `https://discord.gg/xxxxx` ou `https://discord.com/invite/xxxxx`

3. **Tester le lien directement**
   - Copie le lien depuis `.env.local` et colle-le dans ton navigateur
   - Si ça ne fonctionne pas, le lien Discord est peut-être expiré ou invalide

4. **Vérifier la console du navigateur**
   - Ouvre les outils de développement (F12)
   - Va dans l'onglet "Console"
   - Regarde s'il y a des erreurs

## Problème : Le formulaire ne s'envoie pas

### Solutions :

1. **Vérifier la configuration EmailJS**
   - Ouvre `.env.local`
   - Vérifie que ces valeurs sont remplies :
     ```
     VITE_EMAILJS_SERVICE_ID=service_xxxxx
     VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
     VITE_EMAILJS_PUBLIC_KEY=xxxxx
     ```
   - Si elles contiennent encore `your_service_id_here`, EmailJS n'est pas configuré

2. **Vérifier le template EmailJS**
   - Connecte-toi sur [https://www.emailjs.com/](https://www.emailjs.com/)
   - Va dans "Email Templates"
   - Vérifie que ton template a bien :
     - **To Email** : `fazekiti@gmail.com` (ou l'adresse de destination)
     - Les variables : `{{pseudo}}`, `{{from_email}}`, `{{style_jeu}}`, `{{age}}`, `{{message}}`

3. **Vérifier la console du navigateur**
   - Ouvre les outils de développement (F12)
   - Va dans l'onglet "Console"
   - Essaie d'envoyer le formulaire
   - Regarde les messages d'erreur détaillés qui s'affichent maintenant

4. **Vérifier les limites EmailJS**
   - Le plan gratuit d'EmailJS limite à 200 emails/mois
   - Si tu as atteint la limite, tu devras attendre ou passer à un plan payant

5. **Tester avec un email de test**
   - Assure-toi que tous les champs sont remplis
   - Sélectionne au moins un style de jeu
   - Vérifie que l'âge est un nombre valide

## Vérifications rapides

### Pour Discord :
- ✅ Le lien dans `.env.local` commence par `https://discord.gg/` ou `https://discord.com/invite/`
- ✅ Le serveur a été redémarré après modification de `.env.local`
- ✅ Le lien fonctionne quand tu le colles directement dans le navigateur

### Pour le formulaire :
- ✅ Les identifiants EmailJS sont configurés dans `.env.local`
- ✅ Le template EmailJS a `fazekiti@gmail.com` dans "To Email"
- ✅ Le template EmailJS utilise les bonnes variables
- ✅ Tous les champs du formulaire sont remplis
- ✅ Au moins un style de jeu est sélectionné

## Messages d'erreur courants

### "EmailJS n'est pas encore configuré"
→ Configure EmailJS en suivant `EMAILJS_SETUP.md`

### "Veuillez sélectionner au moins un style de jeu"
→ Sélectionne au moins une case dans "Style de jeu"

### Erreur 400 (Bad Request)
→ Vérifie que le template EmailJS utilise les bonnes variables

### Erreur 401 (Unauthorized)
→ Vérifie que ta clé publique EmailJS est correcte

### Erreur 429 (Too Many Requests)
→ Tu as atteint la limite d'emails gratuits d'EmailJS

## Besoin d'aide supplémentaire ?

1. Ouvre la console du navigateur (F12)
2. Copie les messages d'erreur
3. Vérifie la configuration dans `.env.local`
4. Consulte la documentation EmailJS : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
