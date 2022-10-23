// ignore_for_file: use_build_context_synchronously, sized_box_for_whitespace

import 'package:flutter/material.dart';
import 'package:scheduler_project/screen/home_screen.dart';

import '../google/google_sigin_api.dart';

class Login extends StatelessWidget {
  static String routeName = 'login';
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    // This size provide us total height and with of our screen

    Future signIn() async {
      final user = await GoogleSignInApi.login();
      if (user == null) {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text('Sign In Failed!')));
      } else {
        Navigator.of(context).pushReplacement(MaterialPageRoute(
          builder: (context) => HomeScreen(user: user),
        ));
      }
    }

    return Container(
      alignment: Alignment.center,
      height: size.height,
      width: double.infinity,
      child: Stack(
        children: [
          Positioned(
            top: 30,
            left: 100,
            child: Image.asset(
              "assets/images/Logo_Đại_học_FPT.png",
              width: size.width * 0.5,
            ),
          ),
          Positioned(
            top: 180,
            left: 40,
            child: Image.asset(
              "assets/images/scheduler.png",
              width: size.width * 0.8,
            ),
          ),
          Positioned(
            bottom: 200,
            left: 30,
            child: Column(
              children: [
                Text(
                  "Lecturer Scheduler App",
                  style: TextStyle(
                    fontSize: 28,
                    color: Color.fromARGB(255, 5, 105, 122),
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(
                  height: 25,
                ),
                Container(
                  width: size.width * 0.8,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(29),
                    // ignore: deprecated_member_use
                    child: FlatButton(
                      color: Color.fromRGBO(1, 183, 224, 1),
                      padding:
                          EdgeInsets.symmetric(vertical: 0, horizontal: 30),
                      onPressed: signIn,
                      child: Row(
                        children: [
                          Container(
                            width: size.width * 0.1,
                            height: size.height * 0.08,
                            child: CircleAvatar(
                              radius: 56,
                              backgroundColor: Colors.white,
                              child: Padding(
                                padding:
                                    const EdgeInsets.all(2), // Border radius
                                child: ClipOval(
                                    child: Image.asset(
                                  'assets/images/Google__G__Logo.svg.png',
                                )),
                              ),
                            ),
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          Text(
                            'Login with google',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 23,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
