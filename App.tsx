import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Lang = 'uz' | 'en' | 'ru';
const translations = {
  uz: { hello: 'Xush kelibsiz!', sub: 'Talabalar uchun yagona raqamli platforma', courses: 'Mening kurslarim', library: 'Elektron kutubxona', research: 'Ilmiy tadqiqotlar', ai: 'AI yordamchi', tasks: 'Bugungi vazifalar', task1: 'Raqamli pedagogika — ma’ruza', task2: 'Ilmiy maqola rejasini tayyorlash', grants: 'Grantlar va imkoniyatlar', profile: 'Shaxsiy kabinet', note: 'O‘qish, tadqiqot va rivojlanish — bir joyda.' },
  en: { hello: 'Welcome!', sub: 'One digital platform for university students', courses: 'My courses', library: 'Digital library', research: 'Research', ai: 'AI assistant', tasks: "Today's tasks", task1: 'Digital pedagogy — lecture', task2: 'Prepare a research article outline', grants: 'Grants and opportunities', profile: 'My profile', note: 'Learning, research and growth — all in one place.' },
  ru: { hello: 'Добро пожаловать!', sub: 'Единая цифровая платформа для студентов', courses: 'Мои курсы', library: 'Электронная библиотека', research: 'Научные исследования', ai: 'ИИ-помощник', tasks: 'Задачи на сегодня', task1: 'Цифровая педагогика — лекция', task2: 'Подготовить план научной статьи', grants: 'Гранты и возможности', profile: 'Личный кабинет', note: 'Обучение, исследования и развитие — в одном месте.' }
};
export default function App() {
  const [lang, setLang] = useState<Lang>('uz');
  const t = translations[lang];
  const cards = [
    ['▣', t.courses, 'Kurslar va dars materiallari'],
    ['▤', t.library, 'Kitoblar, maqolalar va PDF'],
    ['⌕', t.research, 'Maqola va ilmiy izlanishlar'],
    ['✦', t.ai, 'Savollarga aqlli yordam']
  ];
  return <SafeAreaView style={s.safe}>
    <StatusBar style="light" />
    <View style={s.header}>
      <Text style={s.logo}>AVORA</Text>
      <Text style={s.tag}>LEARN • RESEARCH • ACHIEVE</Text>
      <View style={s.langs}>{(['uz','en','ru'] as Lang[]).map(x =>
        <TouchableOpacity key={x} onPress={() => setLang(x)} style={[s.lang, lang===x && s.active]}>
          <Text style={[s.langText, lang===x && s.activeText]}>{x.toUpperCase()}</Text>
        </TouchableOpacity>)}</View>
    </View>
    <ScrollView contentContainerStyle={s.content}>
      <View style={s.hero}>
        <Text style={s.eyebrow}>AVORA • STUDENT PLATFORM</Text>
        <Text style={s.title}>{t.hello}</Text>
        <Text style={s.sub}>{t.sub}</Text>
        <Text style={s.note}>{t.note}</Text>
      </View>
      <Text style={s.section}>{t.courses}</Text>
      <View style={s.grid}>{cards.map(([icon,title,desc]) =>
        <TouchableOpacity key={title} style={s.card}>
          <Text style={s.icon}>{icon}</Text><Text style={s.cardTitle}>{title}</Text><Text style={s.desc}>{desc}</Text>
        </TouchableOpacity>)}</View>
      <View style={s.panel}>
        <Text style={s.panelTitle}>{t.tasks}</Text>
        <Text style={s.task}>○  {t.task1}</Text><Text style={s.task}>○  {t.task2}</Text>
      </View>
      <View style={s.panel}><Text style={s.panelTitle}>{t.grants}</Text><Text style={s.desc}>Erasmus+, stipendiyalar, tanlovlar va xalqaro dasturlar.</Text></View>
      <View style={s.panel}><Text style={s.panelTitle}>{t.profile}</Text><Text style={s.desc}>AVORA — barcha universitet talabalari uchun.</Text></View>
    </ScrollView>
    <View style={s.footer}><Text style={s.footerText}>AVORA • {t.profile}</Text></View>
  </SafeAreaView>;
}
const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:'#F5F7FB'},
  header:{backgroundColor:'#0B2F5B',paddingHorizontal:22,paddingTop:18,paddingBottom:20},
  logo:{color:'#FFF',fontSize:30,fontWeight:'900',letterSpacing:4},
  tag:{color:'#D5A64A',fontSize:10,letterSpacing:2,marginTop:3},
  langs:{flexDirection:'row',alignSelf:'flex-end',marginTop:-28,gap:8},
  lang:{paddingVertical:7,paddingHorizontal:10,borderRadius:14,borderWidth:1,borderColor:'#6F8EAF'},
  active:{backgroundColor:'#D5A64A',borderColor:'#D5A64A'},
  langText:{color:'#FFF',fontSize:11,fontWeight:'700'},
  activeText:{color:'#0B2F5B'},
  content:{padding:16,paddingBottom:32},
  hero:{backgroundColor:'#174B87',borderRadius:22,padding:22,marginBottom:22},
  eyebrow:{color:'#D5A64A',fontSize:10,fontWeight:'800',letterSpacing:1.5},
  title:{color:'#FFF',fontSize:28,fontWeight:'800',marginTop:12},
  sub:{color:'#FFF',fontSize:15,marginTop:6,lineHeight:22},
  note:{color:'#E7EEF8',fontSize:12,marginTop:18,lineHeight:18},
  section:{color:'#0B2F5B',fontSize:19,fontWeight:'800',marginBottom:12},
  grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'},
  card:{width:'48%',backgroundColor:'#FFF',borderRadius:18,padding:16,marginBottom:12,minHeight:142,borderWidth:1,borderColor:'#E5EAF2'},
  icon:{color:'#174B87',fontSize:28,fontWeight:'800'},
  cardTitle:{color:'#0B2F5B',fontSize:15,fontWeight:'800',marginTop:9},
  desc:{color:'#64748B',fontSize:12,marginTop:6,lineHeight:18},
  panel:{backgroundColor:'#FFF',borderRadius:18,padding:17,marginTop:8,marginBottom:10,borderWidth:1,borderColor:'#E5EAF2'},
  panelTitle:{color:'#0B2F5B',fontSize:17,fontWeight:'800',marginBottom:12},
  task:{color:'#24364B',fontSize:13,paddingVertical:9},
  footer:{backgroundColor:'#FFF',padding:13,alignItems:'center',borderTopWidth:1,borderTopColor:'#E5EAF2'},
  footerText:{color:'#174B87',fontWeight:'700',fontSize:12}
});
