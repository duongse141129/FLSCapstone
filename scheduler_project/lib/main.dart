import 'package:flutter/material.dart';
import 'package:scheduler_project/Semester/semester_page.dart';
import 'package:scheduler_project/constants.dart';
import 'package:scheduler_project/home/home_page.dart';
import 'package:scheduler_project/screen/logged_screen.dart';
import 'package:scheduler_project/subject/dropdown.dart';
import 'package:scheduler_project/subject/subject_page.dart';
import 'package:scheduler_project/widgets/login.dart';

import './screen/login_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Lecturer Scheduler',
      theme: ThemeData(
        primaryColor: kPrimaryColor,
        scaffoldBackgroundColor: Colors.white,
      ),
      home: LoginScreen(),
      //initialRoute: LoginScreen.routeName,
      routes: {
        LoginScreen.routeName: (ctx) => LoginScreen(),
        Login.routeName: (ctx) => Login(),
      },
    );
  }
}
