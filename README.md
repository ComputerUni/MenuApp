# MenuApp - Yemek Sepeti Uygulaması 🍔🍕

**MenuApp**, kullanıcıların çeşitli yemek kategorileri arasında gezinebileceği, yemeklerin detaylarını inceleyebileceği ve beğendikleri yemekleri favorilere ekleyebileceği, React Native ve Expo ile geliştirilmiş modern bir mobil uygulamadır.

## 🚀 Özellikler

- **Kategorilere Göz Atma**: Yemekleri ana kategorilere (örneğin: İtalyan, Hızlı ve Pratik, Hamburgerler) göre listeleyin.
- **Detaylı Yemek İnceleme**: Her yemeğin içeriği, hazırlama süresi, zorluk derecesi, kalorisi ve fiyatı gibi detayları görüntüleyin.
- **Favorilere Ekleme**: Beğendiğiniz yemekleri favori listenize ekleyin ve kolayca erişin. Bu özellik **Redux Toolkit** kullanılarak yönetilmektedir.
- **Gelişmiş Navigasyon**: **React Navigation** (Drawer ve Stack) kullanılarak oluşturulmuş akıcı ve kullanıcı dostu bir menü yapısı.
- **Özel Tasarım**: Özel yazı tipleri ve ikonlar ile zenginleştirilmiş kullanıcı arayüzü.

## 🛠️ Kullanılan Teknolojiler

Bu proje aşağıdaki teknolojiler kullanılarak geliştirilmiştir:

- **[React Native]**: Cross-platform mobil uygulama geliştirme framework'ü.
- **[Expo]**: React Native uygulamaları geliştirmek, derlemek ve yayınlamak için kullanılan platform.
- **[Redux Toolkit]**: Uygulama durum yönetimi (State Management) için, özellikle favorilerin saklanmasında kullanılır.
- **[React Navigation]**: Uygulama içi yönlendirme için.
  - `@react-navigation/native-stack`: Stack navigasyon yapısı için.
  - `@react-navigation/drawer`: Yan menü (Drawer) navigasyonu için.
- **Expo Vector Icons**: İkon kütüphaneleri (MaterialIcons, Feather vb.).
- **Expo Font**: Özel yazı tiplerini yüklemek ve kullanmak için.

## 📂 Proje Yapısı

Proje dosyaları aşağıdaki gibi organize edilmiştir:

- **`/screens`**: Uygulamanın ana ekranları (CategoriesScreen, FoodOverviewScreen, FoodDetailScreen, FavoritesScreen).
- **`/components`**: Uygulama genelinde tekrar kullanılan bileşenler (Listeler, Kartlar, Butonlar).
- **`/store`**: Redux store yapılandırması ve reducer'lar (favoriteSlice).
- **`/models`**: Veri modelleri (Category, Food).
- **`/data`**: Uygulama içinde kullanılan dummy (örnek) veriler.
- **`App.js`**: Uygulamanın ana giriş noktası ve navigasyon kurulumu.

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**

    ```bash
    git clone https://github.com/kullaniciadi/MenuApp.git
    cd MenuApp
    ```

2.  **Bağımlılıkları Yükleyin:**

    ```bash
    npm install
    ```

3.  **Uygulamayı Başlatın:**

    ```bash
    npx expo start
    ```

4.  **Uygulamayı Test Edin:**
    - Expo Go uygulamasını telefonunuza (Android/iOS) indirin.
    - Terminalde çıkan QR kodunu Expo Go ile okutarak uygulamayı cihazınızda çalıştırın.
    - Veya bir Android/iOS emülatörü kullanarak test edin.
