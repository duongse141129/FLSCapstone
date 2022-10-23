import 'package:flutter/material.dart';

class MyHeaderDrawer extends StatelessWidget {
  const MyHeaderDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.green[700],
      width: double.infinity,
      height: 200,
      padding: EdgeInsets.only(top: 20),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            margin: EdgeInsets.only(bottom: 10),
            height: 70,
            width: 70,
            // decoration: BoxDecoration(
            //   shape: BoxShape.circle,
            //   image: DecorationImage(
            //     image: AssetImage('assets/images/gaixinh.jpg'),
            //   ),
            // ),
            child: CircleAvatar(
              backgroundImage: AssetImage("assets/images/gaixinh.jpg"),
            ),
          ),
          Text(
            'Rapid Tech',
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
            ),
          ),
          Text(
            'infor@rapidtech.dev',
            style: TextStyle(
              color: Colors.grey[200],
              fontSize: 14,
            ),
          )
        ],
      ),
    );
  }
}
