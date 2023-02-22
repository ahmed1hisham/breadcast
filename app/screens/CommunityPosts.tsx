import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import Post from '../components/other/Community/Post';
import {getAllPosts} from '../services/posts';
import {primary} from '../theme/colors';
import {Post as PostType} from '../types/post';

const CommunityPosts = () => {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 20372,
      user_id: 535344,
      title: 'Adsuesco cimentarius vita molestias enim pecus voluntarius sunt.',
      body: 'Debeo cedo cursim. Volo qui civitas. Arbitro distinctio maxime. Somnus adaugeo decimus. Thermae creptio thesis. Creptio confero barba. Bardus cicuta ascit. Quod terminatio delicate. Audax defigo thesaurus. Uterque accusamus conspergo. Cibus unde repudiandae. Tametsi ambitus defigo. Viduo sperno pauper. Vehemens soleo consequatur. Sperno denique culpo. Ver ocer aranea. Cribro testimonium tempora. Cur non statua.',
    },
    {
      id: 20371,
      user_id: 534917,
      title: 'Aut cogo testimonium copia desolo bonus.',
      body: 'Earum velum nisi. Varius amor ulciscor. Cogito auctor doloribus. Aut ventosus caries. Illum denego cum. Supra armarium debitis. Decimus at amplus. Nihil patria bestia. Una solus vaco. Consectetur altus depopulo. Dicta damnatio sequi. Aut vaco bibo. Aqua acerbitas tollo. Venustas degero odio. Crur balbus defungo. Surgo illum bibo. Virga aggredior auctus. Cotidie unus accendo. Patrocinor sopor recusandae. Sperno suffragium sapiente. Curto cavus uterque.',
    },
    {
      id: 20357,
      user_id: 532998,
      title:
        'Adsidue summisse avoco minima odit beneficium tametsi coma appono.',
      body: 'Turpe defungo surgo. Censura cito carus. Iste adhuc defessus. Cometes illo civis. Vomito debilito aperiam. Vel voluptates terra. Laudantium tui sublime. Celebrer vox cribro. Aranea aspicio templum. Laboriosam trepide odit. Coadunatio enim alii. Recusandae amplexus cervus. Inventore tamdiu teres. Adduco thesaurus verto. Delectus ab admoneo. Tollo tam tondeo. Voluptas terga temptatio. Auris peior sumo. Comminor spiritus cupio. Labore uberrime calamitas. Est civis consectetur.',
    },
    {
      id: 20348,
      user_id: 531622,
      title:
        'Tergiversatio solutio tracto adultus vomer ab est tertius amissio porro qui harum vindico suadeo sit aut.',
      body: 'Terra dens benigne. Thema voro curis. Blandior adamo et. Aptus cariosus appositus. Accusamus demonstro thalassinus. Vulnus sortitus atrocitas. Provident conculco trucido. Quasi universe truculenter. Ciminatio conor attonbitus. Omnis tametsi ultra. Decretum corrigo comitatus. Arceo toties peior. Delinquo contra ventus. Aggero nulla virga. Comburo denuncio occaecati. Turba alo cui.',
    },
    {
      id: 20347,
      user_id: 531622,
      title:
        'Terminatio blanditiis adfectus amissio colloco spero abscido cur amoveo.',
      body: 'Inventore cotidie annus. Subnecto cognomen abbas. Vomer aspernatur deputo. Paens clementia vociferor. Nisi at tandem. Volaticus coepi uter. Amplexus admoveo canis. Autus depereo cerno. Admoveo carcer dolorem. Artificiose libero vado. Vestrum ut quibusdam. Utrum voluptatem vigilo. Catena rerum spectaculum. Collum callide sub. Adfero triduana accusator. Uxor advenio victus. Cursim aspicio certus. Claustrum compono despecto. Voro nemo beneficium.',
    },
    {
      id: 20336,
      user_id: 531198,
      title:
        'Adiuvo tertius usque dens ad caput cogo cotidie conicio balbus surgo clamo.',
      body: 'Caelum uter delectatio. Tantum corporis contigo. Adopto tego summisse. Amaritudo in suscipio. Audeo vere ubi. Casus coniuratio civis. Auctor ancilla vomica. Amplitudo volubilis supellex. Bardus aureus tenax. Aeger auditor usque. Alo acceptus cado. Vicinus amiculum coadunatio. Consequatur et caput. Vel tamquam attero. Defero comburo deludo. Rerum tergeo cupressus. Cohors advenio textilis. Aut desolo veniam.',
    },
    {
      id: 20328,
      user_id: 529909,
      title:
        'Sapiente depromo talis abbas usitas minus culpa vetus alioqui aspicio temptatio conitor voluptas.',
      body: 'Vilicus reprehenderit aegrus. Asporto quam volubilis. Suggero stipes est. Ocer comminor substantia. Tamdiu pauper laborum. Vinum bibo suscipio. Theatrum traho virga. Comis anser neque. Pectus viscus denuncio. Alienus valde triduana. Constans terreo clarus. Anser absum certus. Virga iure collum. Testimonium ancilla auctor. Vivo enim atrocitas. Conservo derideo thorax. Vere decet despirmatio.',
    },
    {
      id: 20327,
      user_id: 529908,
      title:
        'Paulatim abduco contra dedecor vis adhuc delego sui suggero thesaurus vesica chirographum speciosus thymum cuius acsi depulso bene.',
      body: 'Quo decretum beatus. Ea ambulo delinquo. Caritas tum ut. Cruentus claro sursum. Bestia quae somnus. Creber sit sint. Auctus quidem defetiscor. Adeptio viriliter modi. Urbs mollitia stipes. Acerbitas succedo curo. Coepi talio nisi. Nostrum nesciunt curso. Vapulus et ut. Cornu temperantia absque. Balbus utrum teres. Iure aedificium ut. Vomica derelinquo brevis.',
    },
    {
      id: 20317,
      user_id: 527503,
      title:
        'Vae sed verto angustus denique amor labore curriculum stultus fuga caelum theologus vitium patrocinor sol.',
      body: 'Quasi nihil cupiditas. Strues ambulo abduco. Arcesso accommodo desidero. Arx suffoco currus. Vomito confido collum. Dolorem omnis delicate. Victoria ascit velum. Tepidus et despecto. Uberrime et denuncio. Aegrotatio bellicus tenax. Tracto natus crustulum. Tui beatae cupressus. Nemo coniuratio cenaculum. Benevolentia crepusculum brevis. Tripudio carpo debitis. Depopulo addo claudeo. Totus cenaculum audeo. Sustineo perferendis tracto. Defleo thesaurus ver.',
    },
    {
      id: 20316,
      user_id: 527503,
      title:
        'Quos vita aliqua claro aliquid claustrum cupiditas tergiversatio reprehenderit amor carcer crapula quaerat crur cura illo desino nam tunc.',
      body: 'Modi quos denuncio. Adimpleo contego complectus. Aliquam quis rerum. Aer charisma adipiscor. Desparatus vereor quas. Aliqua ventito iusto. Aequitas tergiversatio dignissimos. Cetera delicate vivo. Suppono ratione celo. Taceo cunabula antiquus. Utique alii rerum. Cunae agnitio ad. Tergeo coma denuo. Centum titulus theatrum. Bestia ut vilicus. Culpa adhaero pectus. Curso animi verus. Ustulo cui spargo. Defleo videlicet arbitro. Eos fugiat aduro.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    await getAllPosts()
      .then(res => {
        console.log(res.data);

        setPosts(res.data);
      })
      .catch(err => console.log(err));

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={primary} size={'large'} />
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={({item}) => {
            return <Post post={item} />;
          }}
          contentContainerStyle={{paddingHorizontal: 15, paddingTop: 15}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default CommunityPosts;
